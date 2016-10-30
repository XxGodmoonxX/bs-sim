function onInputChanged(e) {
    var file = e.target.files && e.target.files[0];
    if (file != null) {
        var reader = new FileReader();
        reader.onload = onImageLoad;
        reader.readAsDataURL(file);
    }
}

function onImageLoad(e) {
    var largeData = e.target.result;
    var smallData = makeSmall(largeData);
    previewLarge.src = largeData;
    previewSmall.src = smallData;
}

// 画像データ(DataURL)を縮小して返す
function makeSmall(data) {
    // 画像データの縦横サイズを取得する
    var image = document.createElement('img');
    image.src = data;
    var width = image.naturalWidth;
    var height = image.naturalHeight;

    // 縮小する。今回は縦横長い方を300にして縦横比を維持
    var canvas = document.createElement('canvas');
    var memo = width / height;

    if (300 > 300 / memo) {
        canvas.width = 300;
        canvas.height = 300 / memo;
        canvas.getContext("2d").drawImage(image, 0, 0, 300, 300 / memo);
    } else {
        canvas.width = 300 * memo;
        canvas.height = 300;
        canvas.getContext("2d").drawImage(image, 0, 0, 300 * memo, 300);
    }

    return canvas.toDataURL();
}

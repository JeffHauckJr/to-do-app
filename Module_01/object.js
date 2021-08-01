const cssOptions = {
    height: '360px',
    width: '360px',
    border: '1px solid black'
};

$('#backgroundColor input').on('input', function () {
    let background = $(this).val()
    cssOptions['backgroundColor'] = background
    updatePreview()
});

$('#height input').on('input', function () {
    let height = $(this).val() + 'px'
    cssOptions['height'] = height
    updatePreview()
});

$('#borderRadius input').on('input', function () {
    let borderRadius = $(this).val() + '%'
    cssOptions['border-radius'] = borderRadius
    updatePreview()
});

$('#fontFamily input').on('input', function () {
    let font = $(this)
    cssOptions['font-family'] = font
    updatePreview()
});

$('#lift input').on('input', function () {
    let lift = $(this).val()
    
    if (lift === 0 ) {
        cssObjects['box-shadow'] = none 
    } else {
        cssObjects['box-shadow'] = `0 ${ Math.floor(value / 2) }px ${ value }px black`
    }
    updatePreview()
});

function updatePreview() {
    $('#preview').css(cssOptions)
}

updatePreview();
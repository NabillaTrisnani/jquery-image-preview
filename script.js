//handle on change
function onchange_value(name, preview) {
  files = $(`#${name}`).prop('files');
  var filesArr = Array.prototype.slice.call(files);

  if (filesArr[0].size > 2097152) {
    alert(`File ${filesArr[0].name} is too big!`);

    //The code below is to prevent any change when the file is bigger than the max size (2097152 or 2MB)
    $(`#${name}`).val('');
    $(`#${preview}`).removeClass('active');
    $(`#${preview} label.label-upload-image`).html(
      "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'><path fill='currentColor' d='M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z'/></svg>Upload File"
    );
    $(`#${preview} img.image-preview`).attr('src', '');
    //The code above is to prevent any change when the file is bigger than the max size (2097152 or 2MB)
  } else {
    $(`#${preview}`).addClass('active');
    $(`#${preview} label.label-upload-image`).html('');
    $(`#${preview} img.image-preview`).attr(
      'src',
      URL.createObjectURL(filesArr[0])
    );

    console.log(filesArr[0].name, 'name'); //for testing in console
  }
}

//handle on click button delete
function delete_value(name, preview) {
  $(`#${name}`).val('');
  $(`#${preview}`).removeClass('active');
  $(`#${preview} label.label-upload-image img`).removeClass('d-none');
  $(`#${preview} label.label-upload-image`).html(
    "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'><path fill='currentColor' d='M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z'/></svg>Upload File"
  );
  $(`#${preview} img.image-preview`).attr('src', '');
}

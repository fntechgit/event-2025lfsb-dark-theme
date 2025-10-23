export const MEDIA_TYPES = Object.freeze({
    VIDEO: 'video',
    IMAGE: 'image'
});

export const types = new Map([
    ["jpg", MEDIA_TYPES.IMAGE], 
    ["gif", MEDIA_TYPES.IMAGE], 
    ["png", MEDIA_TYPES.IMAGE], 
    ["svg", MEDIA_TYPES.IMAGE], 
    ["bmp", MEDIA_TYPES.IMAGE],
    ["tiff", MEDIA_TYPES.IMAGE],
    ["pdf", MEDIA_TYPES.IMAGE],
    ["raw", MEDIA_TYPES.IMAGE],  
    ["eps", MEDIA_TYPES.IMAGE], 
    ["mp4", MEDIA_TYPES.VIDEO], 
    ["3gp", MEDIA_TYPES.VIDEO],
    ["mov", MEDIA_TYPES.VIDEO],
    ["mp3", MEDIA_TYPES.VIDEO],
    ["wmv", MEDIA_TYPES.VIDEO],
    ["mpg", MEDIA_TYPES.VIDEO],
    ["mpeg", MEDIA_TYPES.VIDEO],
    ["mp3", MEDIA_TYPES.VIDEO],
    ["avi", MEDIA_TYPES.VIDEO]
])

export const getMediaFileType = (stringFile) => {
    const filePath = stringFile.split(".");
    const fileType = filePath[filePath.length - 1];
    const extension = types.get(fileType);
    return extension;
}
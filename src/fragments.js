export const USER_FRAGMENT = `
    id
    username
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const COMMENT_FRAGMENT = `
    id
    text
    user{
        ${USER_FRAGMENT}
    }
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        locations
        caption
        files{
            ${FILE_FRAGMENT}
        }
        comments{
            ${COMMENT_FRAGMENT}
        }
        user{
            ${USER_FRAGMENT}
        }
    }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room{
        id
        participants{
            id
        }
    }
`;


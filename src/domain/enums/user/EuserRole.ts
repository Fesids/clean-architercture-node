
export enum UserRoles {
    ADMIN,
    CLIENT,

}

export type Features =  {
    create_content: boolean,
    create_session: boolean,
    edit_content: boolean,
	edit_user: boolean,
	delete_content: boolean
}
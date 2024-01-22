import React, {FC, ReactElement} from "react";

export type UserUiProps = {
    name: string;
    position: string;
    extra: ReactElement;
}

export const UserUi: FC<UserUiProps> = ({ name, position, extra }) => {
    return (
        <>
            <div>{name} {position}</div>
            {extra ? extra : null}
        </>
    )
}
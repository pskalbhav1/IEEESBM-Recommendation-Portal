import * as React from "react";
import { Show, SimpleShowLayout, TextField,UrlField, EmailField } from 'react-admin';

export const UserList = props => (
    <Show {...props}>
        <SimpleShowLayout rowClick="show">
            <TextField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <EmailField source="email" />
            <TextField source="reg_no" />
            <TextField source="phone_no" />
            <TextField source="photo_id" />
            <UrlField source="portfolio_link" />
            <TextField source="cp_username" />
            <TextField source="domains" />
        </SimpleShowLayout>
    </Show>
);
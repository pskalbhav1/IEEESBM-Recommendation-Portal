import * as React from "react";
import { Show, SimpleForm, TextField,UrlField } from 'react-admin';

export const Users1List = props => (
    <Show {...props}>
        <SimpleForm rowClick="show">
            <TextField source="id" />
            <TextField source="student" />
            <UrlField source="reasoning_ans_link" />
            <TextField source="reasoning_marks" />
            <UrlField source="cs_ans_link" />
            <TextField source="cs_ans_marks" />
            <UrlField source="elec_ans_link" />
            <TextField source="elec_ans_marks" />
            <TextField source="set_no" />
        </SimpleForm>
    </Show>
);

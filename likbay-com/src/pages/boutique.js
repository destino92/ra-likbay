import {
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    ReferenceField,
    NullableBooleanInput,
    BooleanField,
    DateField,
    ReferenceInput,
    BooleanInput,
    SelectInput,
    SimpleForm,
    TextInput,
    NumberInput,
    TopToolbar,
    ListButton
} from 'react-admin';

import { JsonField, JsonInput } from "react-admin-json-view";

import RichTextInput from 'ra-input-rich-text';

const BoutiqueFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Rechercher par nom" source="name" alwaysOn />
        <TextInput label="Rechercher par nom" source="niu" alwaysOn />
        <ReferenceInput label="subscription" source="subscription" reference="abonnement_id" allowEmpty>
            <SelectInput optionText="Abonnement" />
        </ReferenceInput>
    </Filter>
);

export const BoutiqueList = (props) => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" label="Nom"/>
            <TextField source="niu" label="NIU"/>
            <TextField source="rccm" label="RCCM"/>
            <TextField source="address" label="adresse"/>
            <TextField source="tel" label="tel"/>
            <TextField source="city" label="ville"/>
            <BooleanField source="active" valueLabelTrue="Activé" valueLabelFalse="Pas activé"/>
            <ReferenceField source="abonnement_id" reference="subscription">
                <TextField source="abonnement_id" label="Abonnement"/>
            </ReferenceField>
            <TextField source="prix" label="Prix"/>
            <DateField source="created_at"/>
            <DateField source="updated_at"/>
        </Datagrid>
    </List>
);

const BoutiqueTitle = ({ record }) => {
    return <span>Boutique: {record ? `${record.name}` : ''}</span>;
};

const BoutiqueEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} label="Retour" />
    </TopToolbar>
);

export const BoutiqueEdit = (props) => (
    <Edit title={<BoutiqueTitle />} actions={<BoutiqueEditActions />} {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nom" />
            <TextInput source="niu" label="NIU" />
            <TextInput source="rccm" label="RCCM" />
            <TextInput source="address" label="adresse" />
            <TextInput source="tel" label="tel" />
            <NullableBooleanInput source="active" label="Neuve ou utilisé?"/>
            <ReferenceInput source="abonnement_id" reference="subscription">
                <SelectInput optionText="Abonnement" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const BoutiqueCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nom" />
            <TextInput source="niu" label="NIU" />
            <TextInput source="rccm" label="RCCM" />
            <TextInput source="address" label="adresse" />
            <TextInput source="tel" label="tel" />
            <NullableBooleanInput source="active" label="Neuve ou utilisé?"/>
            <ReferenceInput source="abonnement_id" reference="subscription">
                <SelectInput optionText="Abonnement" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
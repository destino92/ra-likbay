import {
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    ReferenceField,
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

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Rechercher par nom" source="Nom" alwaysOn />
        <ReferenceInput label="Categorie" source="category" reference="category" allowEmpty>
            <SelectInput optionText="Catégories" />
        </ReferenceInput>
        <ReferenceInput label="Boutique" source="boutique" reference="boutique" allowEmpty>
            <SelectInput optionText="Boutiques" />
        </ReferenceInput>
        <ReferenceInput label="subscription" source="subscription" reference="subscription" allowEmpty>
            <SelectInput optionText="subscription" />
        </ReferenceInput>
        <BooleanInput source="etat" label="Neuve ou utilisé?" allowEmpty />
    </Filter>
);

export const ProductList = (props) => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="Identifiant du produit"/>
            <TextField source="nom" label="Nom"/>
            <ReferenceField source="category" reference="category">
                <TextField source="category" label="Category"/>
            </ReferenceField>
            <TextField source="detail" label="Détail"/>
            <BooleanField source="etat" label="Neuve ou utilisé?"/>
            <TextField source="marque" label="Marque"/>
            <TextField source="prix" label="Prix"/>
            <JsonField
                source="images"
                addLabel={true}
                jsonString={false} // Set to true if the value is a string, default: false
                reactJsonOptions={{
                // Props passed to react-json-view
                name: null,
                collapsed: true,
                enableClipboard: false,
                displayDataTypes: false,
                }}
            />
            <JsonField
                source="videos"
                addLabel={true}
                jsonString={false} // Set to true if the value is a string, default: false
                reactJsonOptions={{
                // Props passed to react-json-view
                name: null,
                collapsed: true,
                enableClipboard: false,
                displayDataTypes: false,
                }}
            />
            <NumberInput source="poids" label="Poids"/>
            <ReferenceField source="subscription" reference="subscription">
                <TextField source="subscription" label="Subscription"/>
            </ReferenceField>
            <TextField source="coupon" label="Coupon"/>
            <TextInput source="guarantie" label="Guarantie"/>
            <ReferenceField source="boutique" reference="boutique">
                <TextField source="boutique" label="boutique"/>
            </ReferenceField>
            <DateField source="created_at"/>
            <DateField source="updated_at"/>
        </Datagrid>
    </List>
);

const ProductTitle = ({ record }) => {
    return <span>Product: {record ? `${record.nom}` : ''}</span>;
};

const ProductEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} label="Retour" />
    </TopToolbar>
);

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} actions={<ProductEditActions />} {...props}>
        <SimpleForm>
            <TextInput source="nom" label="nom" />
            <ReferenceInput source="category" reference="category" label="Categorie">
                <SelectInput optionText="label" />
            </ReferenceInput>
            <RichTextInput source="detail" label="Détail"/>
            <BooleanInput source="etat" label="Neuve ou utilisé?"/>
            <TextInput source="marque" label="Marque"/>
            <TextInput source="prix" label="Prix"/>
            <JsonInput
                source="images"
                jsonString={false} // Set to true if the value is a string, default: false
                reactJsonOptions={{
                // Props passed to react-json-view
                name: null,
                collapsed: true,
                enableClipboard: false,
                displayDataTypes: false,
                }}
            />
            <JsonInput
                source="videos"
                jsonString={false} // Set to true if the value is a string, default: false
                reactJsonOptions={{
                // Props passed to react-json-view
                name: null,
                collapsed: true,
                enableClipboard: false,
                displayDataTypes: false,
                }}
            />
            <TextInput source="poids" label="Poids"/>
            <ReferenceInput source="subscription" reference="subscription" label="Subscription">
                <SelectInput optionText="label" />
            </ReferenceInput>
            <TextInput source="coupon" label="coupon"/>
            <TextInput source="guarantie" label="guarantie"/>
            {/*<ReferenceInput source="boutique" reference="boutique" label="boutique">
                <SelectInput optionText="label" />
            </ReferenceInput>*/}
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nom" label="nom" />
            <ReferenceInput source="category" reference="category" label="Categorie">
                <SelectInput optionText="label" />
            </ReferenceInput>
            <RichTextInput source="detail" label="Détail"/>
            <BooleanInput source="etat" label="Neuve ou utilisé?"/>
            <TextInput source="marque" label="Marque"/>
            <TextInput source="prix" label="Prix"/>
            <JsonInput
                source="images"
                jsonString={false} // Set to true if the value is a string, default: false
                reactJsonOptions={{
                // Props passed to react-json-view
                name: null,
                collapsed: true,
                enableClipboard: false,
                displayDataTypes: false,
                }}
            />
            <JsonInput
                source="videos"
                jsonString={false} // Set to true if the value is a string, default: false
                reactJsonOptions={{
                // Props passed to react-json-view
                name: null,
                collapsed: true,
                enableClipboard: false,
                displayDataTypes: false,
                }}
            />
            <TextInput source="poids" label="Poids"/>
            <ReferenceInput source="subscription" reference="subscription" label="Subscription">
                <SelectInput optionText="label" />
            </ReferenceInput>
            <TextInput source="coupon" label="coupon"/>
            <TextInput source="guarantie" label="guarantie"/>
            {/*<ReferenceInput source="boutique" reference="boutique" label="boutique">
                <SelectInput optionText="label" />
            </ReferenceInput>*/}
        </SimpleForm>
    </Create>
);
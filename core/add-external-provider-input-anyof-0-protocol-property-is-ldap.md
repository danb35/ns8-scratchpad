# Protocol property is ldap Schema

```txt
http://schema.nethserver.org/cluster/add-external-provider-input.json#/anyOf/0/not
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-external-provider-input.json\*](cluster/add-external-provider-input.json "open original schema") |

## not Type

`object` ([Protocol property is ldap](add-external-provider-input-anyof-0-protocol-property-is-ldap.md))

# not Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [protocol](#protocol) | `string` | Optional | cannot be null | [add-external-provider input](add-external-provider-input-anyof-0-protocol-property-is-ldap-properties-protocol.md "http://schema.nethserver.org/cluster/add-external-provider-input.json#/anyOf/0/not/properties/protocol") |

## protocol



`protocol`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [add-external-provider input](add-external-provider-input-anyof-0-protocol-property-is-ldap-properties-protocol.md "http://schema.nethserver.org/cluster/add-external-provider-input.json#/anyOf/0/not/properties/protocol")

### protocol Type

`string`

### protocol Constraints

**constant**: the value of this property must be equal to:

```json
"ldap"
```
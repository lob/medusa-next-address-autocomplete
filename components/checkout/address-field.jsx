import React from "react";
import { Field } from "formik";
import styles from "../../styles/input-field.module.css";
import { MdError } from "react-icons/md";
import { Autocomplete } from "@lob/react-address-autocomplete";
const apiKey = process.env.NEXT_PUBLIC_LOB_PUBLISHABLE_KEY;
import addressStyle from '../../styles/address.module.css'
import { useFormikContext } from "formik";

const AddressField = ({ id, error, errorMsg}) => {
  const { setFieldValue } = useFormikContext()
  const handleSelect = ({ value }) => {
    setFieldValue('postal_code', value.zip_code)
    setFieldValue('city', value.city)
    setFieldValue('province', value.state.toUpperCase())
    setFieldValue('address_1', value.primary_line)
    setFieldValue('country_code', 'US')
  }
  
  return (
    <div className={styles.container}>
      {error ? (
        <p className={styles.errortext}>{errorMsg}</p>
      ) : (
        <p className={styles.fill} aria-hidden="true">
          fill
        </p>
      )}
      <div
        className={`${styles.fieldcontainer} ${error ? styles.errorfield : ""}`}
      >
      <Autocomplete
        id={id}
        apiKey={apiKey}
        className={addressStyle.address}
        onSelection={handleSelect}
        primaryLineOnly
      />
      
        {error && <MdError className={styles.erroricon} />}
      </div>
    </div>
  );
};

export default AddressField;

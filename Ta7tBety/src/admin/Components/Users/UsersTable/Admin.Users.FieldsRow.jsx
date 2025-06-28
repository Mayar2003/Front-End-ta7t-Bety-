import { EmailIcon, LocationIcon, NameIcon, PhoneIcon } from "../../Icons";

export default function FieldsRow() {
  return (
    <div style={styles.container}>
      <FieldCard>
        <NameIcon />
        <FieldName name="Name" />
      </FieldCard>

      <FieldCard>
        <EmailIcon />
        <FieldName name="Email" />
      </FieldCard>

      <FieldCard>
        <LocationIcon />
        <FieldName name="Location" />
      </FieldCard>

      <FieldCard>
        <PhoneIcon />
        <FieldName name="Phone" />
      </FieldCard>
    </div>
  );
}

function FieldName({ name }) {
  return <span style={styles.fieldName}>{name}</span>;
}

function FieldCard({ children }) {
  return <div style={styles.fieldCard}>{children}</div>;
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "35px",
    height: "10%",
    width: "100%",
  },
  fieldName: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "10px",
    letterSpacing: "0px",
    color: "#15243F",
  },
  fieldCard: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    width: "20%",
  },
};

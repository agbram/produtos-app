import styles from "./styles.module.css";

type Props = {
  label: string;
  type: "text" | "email";
  multiline?: boolean;
};

export function TextField(props: Props) {
  return (
    <label className="root">
      {props.label}
      {(props.multiline)?(<textarea/>):<input type={props.type} placeholder={props.label} />}    
    </label>
  );
}

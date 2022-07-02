import { VirtualAdmissionPropsType } from "../../../../types";

function VirtualAdmission(props: VirtualAdmissionPropsType) {
  const { url_name, name } = props;

  return (
    <div className="virtual_admission">
      <a href={url_name} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </div>
  )
}

export default VirtualAdmission
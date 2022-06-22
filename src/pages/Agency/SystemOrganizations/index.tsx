


function SystemArganizations(props: { title: string, content: string }) {
  return (
    <div className="system_organizations page_card">
      <h4 className="page_title">
        {props.title}
      </h4>
      <div className="system_organizations_body" dangerouslySetInnerHTML={{ __html: props.content }}>

      </div>
    </div>
  )
}

export default SystemArganizations
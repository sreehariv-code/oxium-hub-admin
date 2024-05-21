import styled from "styled-components";

export default function Dashboard() {
  const Input = styled.input`
    padding: 0.1rem;
    padding-left: 0.7rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: inherit;
    caret-color: #03cd70;
    &:focus {
      outline: none;
    }
  `;
  return (
    <div>
      <form action="">
        <div className="form-control">
          <label htmlFor="cms_url">Enter CMS Configuration URL</label>
          <Input type="text" id="cms_url" />
        </div>
        <div className="form-control">
          <label htmlFor="cpid">Enter CMS Configuration URL</label>
          <Input type="text" id="cpid" />
        </div>
      </form>
    </div>
  );
}

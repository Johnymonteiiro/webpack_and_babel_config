import "./style.scss";

interface RepositoryItemsProps {
  repository :{
    name:string,
    description:string,
    html_url:string,
    owner:{
      avatar_url: string,
      login:string,
    }
  }
}

export function RepositoryItems(props : RepositoryItemsProps) {
  return (
    <div className="user">
        <div className="user-profile">
          <div className="image-profile">
            <img
              src={props.repository.owner.avatar_url}
              alt={props.repository.owner.login}
            />
          </div>
          <div>
            <p className="profile-name">{props.repository.owner.login}</p>
          </div>
        </div>
        <li>
          <strong>Repository Name: {props.repository.name}</strong>
          <p>{props.repository.description}</p>
          <a href={props.repository.html_url}>Acess repository</a>
        </li>
    </div>
  );
}

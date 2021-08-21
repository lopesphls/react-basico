import './styles.css';

export const PostCard = ({ title, imagem, body,id }) => {
    return(
        <div className="post">
            <img src={imagem} alt={title} />
            <div className="post-content">
                <h2>{title} </h2>
                <h2>{id} </h2>
                <p>{body}</p>
            </div>
        </div>
    )
}
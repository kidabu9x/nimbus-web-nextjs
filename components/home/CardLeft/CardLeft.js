import styles from "./styles";

export default function CardLeft({ blog }) {
  return (
    <>
      {blog && (
        <div className="ui card card-left">
          <div className="image">
            <img
              src={
                blog.thumbnail
                  ? blog.thumbnail
                  : "https://react.semantic-ui.com/images/avatar/large/matthew.png"
              }
            />
          </div>
          <div className="content">
            <div className="header">{blog.title}</div>
            <div className="description">{blog.description}</div>
          </div>
          <div className="extra content">
            <a>
              <img src={blog.authors[0].avatar} className="img-author" />
              {`${blog.authors[0].first_name} ${blog.authors[0].last_name}`}
            </a>
          </div>

          <style jsx>{styles}</style>
        </div>
      )}
    </>
  );
}

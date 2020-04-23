import styles from "./styles";
import Link from "next/link";

export default function CardRight({ blog }) {
  return (
    <>
      {blog && (
        <Link href={`/${blog.slug}`}>
          <div className="ui card card-right">
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
            </div>
            <div className="extra content">
              <a>
                <img src={blog.authors[0].avatar} className="img-author" />
                {`${blog.authors[0].first_name} ${blog.authors[0].last_name}`}
              </a>
            </div>

            <style jsx>{styles}</style>
          </div>
        </Link>
      )}
    </>
  );
}

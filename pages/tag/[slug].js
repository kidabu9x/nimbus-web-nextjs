import {
    getTag,
    getCategories
} from "../../api/blog";
import { SLUG_TYPE } from "../../utils/constants";
import SlugPage from "../../screens/slug";
import { NextSeo } from "next-seo";

const Slug = ({ host, categories, highlights, type, dataPage }) => {
    if (!dataPage) {
        return <></>;
    }

    const title = (() => {
        return dataPage.tag.title;
    })();

    const description = (() => {
        return "Nơi nâng cao kĩ năng của bạn";
    })();

    const canonical = host + (() => {
        return dataPage.tag.slug;
    })();

    const image = (() => {
        return "https://res.cloudinary.com/nimbus-education/image/upload/v1588748885/blogs/uat/logo-white-bg.png";
    })();

    const openGraph = {
        url: canonical,
        title: title,
        description: description,
        locale: "vi_VN",
        type: "article",
        images: [
            {
                url: image
            }
        ],
        site_name: 'Nimbus Study Hub',
    };

    const twitter = {
        handle: '@handle',
        site: '@site'
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={canonical}
                openGraph={openGraph}
                twitter={twitter}
            />
            <SlugPage
                categories={categories}
                highlights={highlights}
                type={type}
                dataPage={dataPage}
            />
        </>
    );
};

export async function getServerSideProps({ req, params, query }) {
    const host = "https://" + req.headers.host + "/";

    let categories = [];
    let highlights = [];
    let type = SLUG_TYPE.TAG;
    let dataPage = null;

    try {
        const resCategories = await getCategories();
        categories = resCategories.data.data;
    } catch (error) {
        console.log("Fetch category error: " + error.message);
    }

    try {
        const resSlug = await getTag(params.slug);
        const slug = resSlug.data.data;
        highlights = slug.highlights;
        dataPage = {
            tag: slug.tag,
            blogs: slug.blogs
        };
    } catch (e) {
        console.log(e.message);
    }

    return {
        props: { host, categories, highlights, type, dataPage }
    };
}

export default Slug;

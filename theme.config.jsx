export default {
    footer: (
        <small style={{ display: "block", marginTop: "8rem" }}>
            <time>{2024}</time> © Daren Hua.
            <style jsx>{`
                a {
                    float: right;
                }
                @media screen and (max-width: 480px) {
                    article {
                        padding-top: 2rem;
                        padding-bottom: 4rem;
                    }
                }
            `}</style>
        </small>
    ),
    head: ({ meta }) => (
        <>
            {meta.description && (
                <meta name="description" content={meta.description} />
            )}
            {meta.tag && <meta name="keywords" content={meta.tag} />}
            {meta.author && <meta name="author" content={meta.author} />}
        </>
    ),
    banner: {
        key: "link-to-website",
        text: (
            <a href="https://indigenous-lifeways.vercel.app/" target="_blank">
                🚨 Do you like this project? Check out a similar website of
                mines →
            </a>
        ),
        dismissible: true,
    },
    darkMode: true,
    navs: [
        {
            url: "https://www.linkedin.com/in/daren-hua/",
            name: "Daren Hua",
        },
    ],
};

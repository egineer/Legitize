import React, { useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import prisma from "../../lib/prisma";

const DraftPosts = ({ feed }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const publishPost = async (postId) => {
    try {
      setLoading(true);
      const body = {
        published: true,
      };
      await fetch("/api/post/edit?id=" + postId, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setLoading(false);
      await router.push("/posts");
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main class="pt-[5.5rem] lg:pt-24">
        <h1>Draft Posts</h1>
        {feed.length > 0 ? (
          feed.map((item, index) => (
            <div className="post-card" key={index}>
              <span style={{ fontWeight: "bold" }}>{item.title}</span>

              <p>{item.content}</p>
              <div className="post-card-action">
                <button onClick={() => publishPost(item.id)}>
                  {loading ? "Loading..." : "Publish"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No draft posts found.</p>
          </div>
        )}
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: false },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

export default DraftPosts;

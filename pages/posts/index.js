import React, { useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import prisma from "../../lib/prisma";

const Posts = ({ feed }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const deletePost = async (postId) => {
    try {
      setLoading(true);
      await fetch("/api/post/delete?id=" + postId, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
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
        <h1>Posts</h1>
        {feed.length > 0 ? (
          feed.map((item, index) => (
            <div className="post-card" key={index}>
              <span style={{ fontWeight: "bold" }}>{item.title}</span>
              <p>{item.content}</p>
              <div>
                <button onClick={() => deletePost(item.id)}>
                  {loading ? "Loading" : "Delete"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No published posts found.</p>
          </div>
        )}
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

export default Posts;

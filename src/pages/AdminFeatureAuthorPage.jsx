import AdminSideBar from "../components/AdminSideBar";

export default function AdminFeatureAuthorPage() {
    return (
        <main className="bg-gray">
            <AdminSideBar active={"featuredAuthor"} />
            <section className="h-screen pl-[300px] py-5 pr-12">
                Shibal
            </section>
        </main>  
    );
}
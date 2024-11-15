import Header from "./_components/Header";


export default function DashboardLayout({children}) {
    return (
        <div>
            <Header />
            <div className="pt-10 px-2 md:px-8 lg:px-16 xl:px-32">
                {children}
            </div>  
        
        </div>
    )
}
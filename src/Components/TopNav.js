export default function TopNav(props) {
    let topNavItems = [
        {
        address : "Irving, Texas",
        email : "info@abc.com",
        facebook : "NepalVacancy",
        linkedin : "NepalVacancy"
        
        },
        
    ]
        
    return (
        <>
        <div className = "row">

            {topNavItems.map((item) => (

            <div className = "col-sm-4 col-xs-12 col-lg-4">

                      <span className="p-2">{item.address}</span>   |
                       <span className="p-2">{item.email}</span>
                   
            </div>
            
             ))}
            
            
            
        </div>
        </>
    )
}

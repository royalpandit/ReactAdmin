const Card=({ title, value, color })=> {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div style={{backgroundColor:"blue",borderRadius:'10px',padding:'10px'}}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xl font-weight-bold text-${color} text mb-1`}>
                                {title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">No:- {value}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Card
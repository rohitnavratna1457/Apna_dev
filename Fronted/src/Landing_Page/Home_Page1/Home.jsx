import React from 'react'
import Story from '../SuceesStory/Story'
const Home = () => {
  return (
    <div
      style={{
        paddingTop: "40px",
        // backgroundColor: "rgba(254, 254, 254, 0.8)",
        height: "900px",
        // display: "flex",
        marginLeft: "100px",
      }}
    >
      <div
        style={{
          // background: "red",
          marginRight: "20px",
          height: "100px",
          width: "1000px",
          textAlign: "center",
          marginLeft: "50px",
        }}
      >
        <h2 > Welcome to the site Login page</h2>
      </div>
      <div>
        {/* <Card
          style={{
            width: "1600px",
            // height: "100px",
            boxShadow: "1px 0.5px 4px gray",
            // position: "fixed",
            // display:"flex",
            marginLeft:"100px"

            // marginTop:"50px"
          }}
        > 
        <div style={{display:"flex"}}>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Home
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Profile
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Partner
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Amount
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Transactions
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            About Us
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Contact Us
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Privacy Policy
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              width: "190px",
              marginLeft: "-20px",
            }}
          >
            Logout
          </p>

          </div>
        </Card> */}

        <div style={{  marginLeft: "150px" }}>
          {user.map((i) => (
            <div>
              <p
                style={{
                  marginTop: "-22px",
                  position: "fixed",
                  marginLeft: "89.5%",
                  fontSize: "16px",
                  zIndex: "9999",
                }}
              >
                <FaIndianRupeeSign />
              </p>
              <p
                style={{
                  marginTop: "-25px",
                  position: "fixed",
                  marginLeft: "91%",
                  fontSize: "17px",
                  zIndex: "9999",
                }}
              >
                {i.balance}
              </p>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: "30px", display: "flex" }}>
          {data.map((i) => (
            <div
              style={{
                marginTop: "20px",
                opacity: "1",
                boxShadow: "1px 0.5px 4px gray",
                marginLeft: "50px",
                width: "500px",
                height: "260px",
                display: "flex",
                borderRadius: "10px",
                display: "flex",
                paddingTop: "10px",
              }}
            >
              <Link
                to={`/${i.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>
                  <img
                    src={`${baseurl}${i.pic}`}
                    style={{
                      width: "180px",
                      height: "200px",
                      borderRadius: "5%",
                      marginLeft: "25px",
                      // marginTop: "-13px",
                      marginTop: "15px",
                      marginBottom: "10px",
                    }}
                  />
                </p>
              </Link>
              <div>
                <Link
                  to={`/${i.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p
                    style={{
                      marginLeft: "50px",
                      marginTop: "20px",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    {i.username}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "60px",
                      marginLeft: "-15px",
                    }}
                  >
                    <p
                      style={{
                        marginLeft: "50px",
                        marginTop: "-24px",
                        fontSize: "18px",
                      }}
                    >
                      age : {i.age}
                    </p>
                    <p
                      style={{
                        marginLeft: "50px",
                        marginTop: "-24px",
                        fontSize: "18px",
                      }}
                    >
                      {i.marrige_status}
                    </p>
                  </div>

                  <FaLocationDot
                    style={{
                      marginTop: "-30px",
                      marginLeft: "30px",
                      fontSize: "17px",
                    }}
                  />
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        marginLeft: "50px",
                        marginTop: "-24px",
                        fontSize: "18px",
                      }}
                    >
                      {i.disttrict}
                    </p>
                    <p
                      style={{
                        marginLeft: "10px",
                        marginTop: "-24px",
                        fontSize: "18px",
                      }}
                    >
                      {i.state}
                    </p>
                  </div>
                  <p
                    style={{
                      marginTop: "15px",
                      marginLeft: "30px",
                      fontSize: "18px",
                    }}
                  >
                    active :{" "}
                    {timeAgo(new Date(i.create_date), {
                      addSuffix: true,
                    }).replace("about ", "")}
                  </p>
                </Link>
                {i.user_apply.some((u) => u.user === 6) ? (
                  //  <a href={`tel:${i.contact}`} style={{ textDecoration: 'none' }}>
                  //  <p style={{ marginTop: '-25px', marginLeft: '270px' }}><Button style={{ height: '28px' }}><IoCall style={{ fontSize: '18px' }} /></Button></p></a>

                  <p
                    style={{
                      marginTop: "5px",
                      marginLeft: "200px",
                      paddingBottom: "20px",
                    }}
                  >
                    <Button
                      onClick={() => alert_popup(i)}
                      style={{ height: "33px", width: "60px" }}
                    >
                      <IoCall style={{ fontSize: "18px" }} />
                    </Button>
                  </p>
                ) : (
                  <p style={{ marginTop: "-40px", marginLeft: "300px" }}>
                    <Button style={{ height: "33px", width: "60px" }}>
                      <IoSend
                        style={{ fontSize: "22px" }}
                        onClick={() => alert_popup(i)}
                      />
                    </Button>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
  const [user, setUser] = useState([]); // current user
  const [data, setData] = useState([]); // filterd user
  const [admin, setAdmin] = useState([]); // admin
  const [staff_Json, setStaff_Json] = useState([]); // staff
  const [developer, setDeveloper] = useState([]); // developer
  const [charges, setCharges] = useState([]);
  const [revenue, setRevenue] = useState([]);
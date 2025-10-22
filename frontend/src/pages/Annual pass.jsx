export default function AnnualPassPage() {
    const features = [
        'All Pro Features',
        'Priority Support - Dedicated fitness advisor',
        'Exclusive Challenges - Monthly competitions with prizes',
        'Offline Mode - Download workouts for anywhere access',
        'Personal Training Sessions - 2 free sessions per month',
        'Unlimited Guest Passes - Bring friends anytime',
        'Premium Nutrition Plans - Custom meal prep guides',
        'Free Gym Merchandise - Welcome kit worth $50',
        'Early Access to New Classes & Equipment',
        'Spa & Sauna Access'
    ];

    return (
        <div style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '50px',
                maxWidth: '600px',
                width: '100%',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}>
                <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '20px'
                }}>
                    BEST VALUE
                </div>

                <h1 style={{
                    fontSize: '42px',
                    color: '#2d3748',
                    marginBottom: '10px'
                }}>
                    Annual Pass
                </h1>

                <div style={{
                    color: '#718096',
                    fontSize: '18px',
                    marginBottom: '30px'
                }}>
                    Billed Yearly
                    <span style={{
                        background: '#48bb78',
                        color: 'white',
                        padding: '6px 15px',
                        borderRadius: '15px',
                        fontSize: '14px',
                        fontWeight: '600',
                        marginLeft: '10px'
                    }}>
            Save 17%
          </span>
                </div>

                <div style={{
                    fontSize: '64px',
                    fontWeight: 'bold',
                    color: '#4facfe',
                    marginBottom: '10px'
                }}>
                    $99.99 <span style={{
                    fontSize: '24px',
                    color: '#718096'
                }}>/mo</span>
                </div>

                <div style={{
                    color: '#718096',
                    fontSize: '14px',
                    marginBottom: '30px'
                }}>
                    That's only $8.33/month when paid annually
                </div>

                <div style={{
                    color: '#4a5568',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    marginBottom: '40px'
                }}>
                    The ultimate fitness experience. Get everything in Pro plus exclusive perks, priority access, and premium features. Commit to your health and save big!
                </div>

                <ul style={{
                    listStyle: 'none',
                    marginBottom: '40px',
                    paddingLeft: '0'
                }}>
                    {features.map((feature, index) => (
                        <li key={index} style={{
                            padding: '15px 0',
                            borderBottom: index === features.length - 1 ? 'none' : '1px solid #e2e8f0',
                            color: '#2d3748',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
              <span style={{
                  color: '#48bb78',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  marginRight: '15px'
              }}>
                ✓
              </span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button style={{
                    width: '100%',
                    padding: '18px',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(79, 172, 254, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                    Go Annual
                </button>

                <div style={{
                    textAlign: 'center',
                    color: '#718096',
                    fontSize: '14px',
                    marginTop: '20px'
                }}>
                    One-time annual payment. Maximum value and savings.
                </div>
            </div>
        </div>
    );
}
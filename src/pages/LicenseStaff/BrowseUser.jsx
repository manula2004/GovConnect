import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import { ArrowLeft, Search } from 'lucide-react';

const styles = {
  body: {
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    margin: 0,
    minHeight: '100vh'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    padding: '32px',
    minHeight: '80vh'
  },
  header: {
    backgroundColor: 'white',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderBottom: '1px solid #e5e5e5'
  },
  backArrow: {
    position: 'absolute',
    left: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    color: '#000000',
    fontSize: '24px',
    fontWeight: '700',
    textAlign: 'center',
    margin: 0
  },
  content: {
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px'
  },
  searchSection: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '24px',
    width: '100%',
    maxWidth: '400px'
  },
  searchInput: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    color: '#333',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  },
  searchButton: {
    backgroundColor: '#033ea1',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color 0.2s ease, transform 0.1s ease'
  },
  userInfoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e5e5e5',
    width: '100%',
    maxWidth: '400px'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '16px',
    lineHeight: '1.5'
  },
  infoLabel: {
    color: '#000000',
    fontWeight: '600',
    minWidth: 'fit-content',
    marginRight: '8px'
  },
  infoValue: {
    color: '#000000',
    fontWeight: '400',
    flex: 1
  }
};

export default function PassportStaffBrowseUser() {
  const navigate = useNavigate();
  const [searchUser, setSearchUser] = useState("");
  const [userData, setUserData] = useState(null);

  const handleGoBack = () => navigate(-1);

  const handleSearchUser = () => {
    // Simulate search result
    setUserData({
      name: "R. A. Jaysiri Laskhman",
      contactNo: "+94 77 7xx xxxx",
      address: "89/5 Anderson Rd, Colombo 6",
      accountStatus: "Active"
    });
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.backArrow} onClick={handleGoBack}>
            <ArrowLeft size={24} color="#000000" />
          </div>
          <div style={styles.headerContent}>
            <Logo width="120px" />
            <h1 style={styles.title}>License Staff - Browse User</h1>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.searchSection}>
            <input
              type="text"
              placeholder="Enter user name or NIC"
              value={searchUser}
              onChange={e => setSearchUser(e.target.value)}
              style={styles.searchInput}
            />
            <button style={styles.searchButton} onClick={handleSearchUser}>
              <Search size={20} /> Search
            </button>
          </div>
          {userData && (
            <div style={styles.userInfoSection}>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Name:</span>
                <span style={styles.infoValue}>{userData.name}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Contact No:</span>
                <span style={styles.infoValue}>{userData.contactNo}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Address:</span>
                <span style={styles.infoValue}>{userData.address}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>Account Status:</span>
                <span style={styles.infoValue}>{userData.accountStatus}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
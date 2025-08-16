import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import { ArrowLeft, Download, Check, X } from 'lucide-react';

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
  applicationList: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  },
  applicationCard: {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
  },
  applicationText: {
    color: '#666666',
    fontSize: '14px',
    fontWeight: '500'
  },
  actionButtons: {
    display: 'flex',
    gap: '8px'
  },
  approveButton: {
    width: '36px',
    height: '36px',
    backgroundColor: '#4caf50',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(76, 175, 80, 0.3)'
  },
  rejectButton: {
    width: '36px',
    height: '36px',
    backgroundColor: '#f44336',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(244, 67, 54, 0.3)'
  }
};

export default function PassportStaffAdminReview() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const handleDownload = (applicationId) => {
    console.log('Downloading application:', applicationId);
    // Add your download logic here
  };
  const handleApprove = (applicationId) => {
    console.log('Approving application:', applicationId);
    // Navigate to approval page or handle approval logic
    // navigate(`/approve/${applicationId}`);
  };
  const handleReject = (applicationId) => {
    console.log('Rejecting application:', applicationId);
    // Add your rejection logic here
  };
  // Sample application data - replace with your actual data
  const applications = [
    { id: 1, type: 'Passport Application' },
    { id: 2, type: 'Passport Application' },
    { id: 3, type: 'Passport Application' }
  ];
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.backArrow} onClick={handleGoBack}>
            <ArrowLeft size={24} color="#000000" />
          </div>
          <div style={styles.headerContent}>
            <Logo width="120px" />
            <h1 style={styles.title}>Passport Admin Review</h1>
          </div>
        </div>
        <div style={styles.applicationList}>
          {applications.map(app => (
            <div key={app.id} style={styles.applicationCard}>
              <span style={styles.applicationText}>Application #{app.id} - {app.type}</span>
              <div style={styles.actionButtons}>
                <div style={styles.approveButton} onClick={() => handleApprove(app.id)}>
                  <Check size={20} color="#fff" />
                </div>
                <div style={styles.rejectButton} onClick={() => handleReject(app.id)}>
                  <X size={20} color="#fff" />
                </div>
                <div style={{ ...styles.approveButton, backgroundColor: '#2196f3', boxShadow: '0 2px 4px rgba(33, 150, 243, 0.3)' }} onClick={() => handleDownload(app.id)}>
                  <Download size={20} color="#fff" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
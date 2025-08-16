import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DriversLicenseForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    licenseNumber: '',
    dateOfIssue: '',
    dateOfExpiry: '',
    vehicleType: '',
    placeOfIssue: ''
  });

  const handleGoBack = () => navigate(-1);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDone = () => {
    console.log('Submitting driver license data:', formData);
    // Add your done logic here
    navigate('/next-step');
  };

  const handleSkipClick = () => {
    console.log('Skipping driver license information...');
    // Add your skip logic here
    navigate('/next-step');
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.backArrow} onClick={handleGoBack}>
            <ArrowLeft size={24} color="#000000" />
          </div>
        </div>
        
        <div style={styles.content}>
          {/* Progress Bar */}
          <div style={styles.progressSection}>
            <div style={styles.progressBar}>
              <div style={styles.progressFilled}></div>
              <div style={styles.progressEmpty}></div>
            </div>
          </div>

          {/* Logo Section */}
          <div style={styles.logoSection}>
            <div style={styles.logoContainer}>
              <div style={styles.logoIcon}>
                <div style={styles.logoShape}></div>
              </div>
            </div>
            <h2 style={styles.logoText}>GovConnect</h2>
          </div>

          {/* Instruction Text */}
          <div style={styles.instructionSection}>
            <p style={styles.instructionText}>
              If you don't have a driver's license, click{' '}
              <span style={styles.skipLink} onClick={handleSkipClick}>Done!</span>
            </p>
          </div>

          {/* Form Fields */}
          <div style={styles.formContainer}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                placeholder="License Number"
                value={formData.licenseNumber}
                onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <input
                type="date"
                placeholder="Date of Issue"
                value={formData.dateOfIssue}
                onChange={(e) => handleInputChange('dateOfIssue', e.target.value)}
                style={styles.input}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              />
              {!formData.dateOfIssue && (
                <span style={styles.placeholder}>Date of Issue</span>
              )}
            </div>

            <div style={styles.inputGroup}>
              <input
                type="date"
                placeholder="Date of Expiry"
                value={formData.dateOfExpiry}
                onChange={(e) => handleInputChange('dateOfExpiry', e.target.value)}
                style={styles.input}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              />
              {!formData.dateOfExpiry && (
                <span style={styles.placeholder}>Date of Expiry</span>
              )}
            </div>

            <div style={styles.inputGroup}>
              <input
                type="text"
                placeholder="Type/Class of Vehicle    eg: B, C1"
                value={formData.vehicleType}
                onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <input
                type="text"
                placeholder="Place of Issue"
                value={formData.placeOfIssue}
                onChange={(e) => handleInputChange('placeOfIssue', e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          {/* Done Button */}
          <div style={styles.actionSection}>
            <button
              onClick={handleDone}
              style={styles.doneButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#022d7a';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#033ea1';
              }}
              onMouseDown={(e) => {
                e.target.style.transform = 'translateY(1px)';
              }}
              onMouseUp={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    borderBottom: '1px solid #e5e5e5'
  },
  backArrow: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progressSection: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '40px'
  },
  progressBar: {
    display: 'flex',
    height: '4px',
    borderRadius: '2px',
    overflow: 'hidden'
  },
  progressFilled: {
    flex: 1,
    backgroundColor: '#033ea1'
  },
  progressEmpty: {
    flex: 2,
    backgroundColor: '#e5e7eb'
  },
  logoSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '32px'
  },
  logoContainer: {
    marginBottom: '16px'
  },
  logoIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#033ea1',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  logoShape: {
    width: '40px',
    height: '50px',
    backgroundColor: '#ffffff',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    position: 'relative'
  },
  logoText: {
    color: '#033ea1',
    fontSize: '24px',
    fontWeight: '700',
    margin: 0
  },
  instructionSection: {
    marginBottom: '32px',
    textAlign: 'center'
  },
  instructionText: {
    color: '#6b7280',
    fontSize: '16px',
    margin: 0
  },
  skipLink: {
    color: '#47a7ff',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: '500'
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px',
    marginBottom: '40px'
  },
  inputGroup: {
    position: 'relative',
    marginBottom: '16px'
  },
  input: {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    color: '#374151',
    transition: 'border-color 0.2s ease'
  },
  placeholder: {
    position: 'absolute',
    top: '50%',
    left: '16px',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    fontSize: '16px',
    pointerEvents: 'none'
  },
  actionSection: {
    width: '100%',
    maxWidth: '300px'
  },
  doneButton: {
    backgroundColor: '#033ea1',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    boxShadow: '0 4px 12px rgba(3, 62, 161, 0.3)',
    transition: 'all 0.2s ease'
  }
};

export default DriversLicenseForm;
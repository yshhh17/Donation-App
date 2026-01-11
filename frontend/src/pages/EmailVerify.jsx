import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-toastify';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const EmailVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError('OTP is required');
      return;
    }

    setLoading(true);
    const result = await verifyEmail(email, otp);
    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      navigate('/login');
    } else {
      toast.error(result.message);
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Verify Your Email</h2>
          <p className="mt-2 text-gray-600">
            We've sent a verification code to
          </p>
          <p className="text-blue-600 font-semibold">{email}</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              label="Verification Code"
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => {
                setOtp(e. target.value);
                setError('');
              }}
              placeholder="Enter 6-digit code"
              error={error}
              required
            />

            <Button type="submit" variant="primary" fullWidth disabled={loading}>
              {loading ? <Spinner size="sm" /> : 'Verify Email'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{' '}
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Resend
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EmailVerify;
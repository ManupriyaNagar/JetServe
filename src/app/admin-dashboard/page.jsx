// app/admin/page.jsx
'use client';

import React, { useState, useEffect } from 'react';

export default function AdminPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Adjust this URL if needed (e.g., environment variable or relative path)
  const API_URL = 'https://flyolaindia.com/backend/api/enquiry';

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        // In your controller, you return just the array for index()
        // If your API wraps things (e.g., { success: true, data: [...] }), adjust accordingly.
        // Here I'll assume data is the array of enquiries.
        if (Array.isArray(data)) {
          setEnquiries(data);
        } else if (data.success && Array.isArray(data.data)) {
          setEnquiries(data.data);
        } else {
          throw new Error(data.error || 'Unexpected API response');
        }
      } catch (err) {
        console.error('Error fetching enquiries:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Enquiries</h2>

      {loading && <p className="text-gray-600">Loading enquiries...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <>
          {enquiries.length > 0 ? (
            <div className="overflow-auto border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted At
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {enquiry.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {enquiry.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {enquiry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {enquiry.course}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {enquiry.created_at || enquiry.submitted_at || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">No enquiries found.</p>
          )}
        </>
      )}
    </div>
  );
}

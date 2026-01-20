export const generateLetter = (mode, data) => {
  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const {
    name = '[Your Name]',
    rollNo = '[Roll No]',
    dept = '[Department]',
    year = '[Year]',
    empId = '[Employee ID]',
    designation = '[Designation]',
    managerName = '[Manager Name]',
    doctorName = '[Doctor Name]',
    hospitalName = '[Hospital Name]',
    condition = '[Condition]',
    reason = '[Reason]',
  } = data;

  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const startDate = formatDate(data.startDate) || '[Start Date]';
  const endDate = formatDate(data.endDate) || '[End Date]';

  if (mode === 'college') {
    return `From:
${name}
${rollNo}
${dept} - ${year} Year

To:
The Head of Department,
${dept},
[College Name],
[City].

Date: ${today}

Subject: Request for Leave - Reg.

Respected Sir/Madam,

I am writing to formally request leave from ${startDate} to ${endDate}. The reason for my absence is ${reason}.

I assure you that I will catch up on the missed classes and assignments upon my return. I kindly request you to grant me leave for the mentioned dates.

Thank you.

Yours Obediently,
${name}
`;
  }

  if (mode === 'office') {
    return `From:
${name}
${designation} (ID: ${empId})

To:
${managerName}
[Manager's Designation],
[Company Name].

Date: ${today}

Subject: Leave Application

Dear ${managerName},

I would like to request leave for ${reason}. I will be away from ${startDate} to ${endDate}.

I have ensured that my current tasks are up to date and have delegated pending items to my team members. I will be available on email/phone for any urgent matters.

Kindly approve my leave request.

Best Regards,

${name}
`;
  }

  if (mode === 'medical') {
    return `From:
${name}

To:
The Class Teacher / HOD / Manager,
[Institution/Company Name].

Date: ${today}

Subject: Medical Leave Application

Respected Sir/Madam,

I am writing to inform you that I am suffering from ${condition} and have been advised rest by Dr. ${doctorName} (${hospitalName}).

Therefore, I am unable to attend regular duties from ${startDate} to ${endDate}. I have attached the medical certificate for your reference.

I kindly request you to grant me medical leave for the above-mentioned period.

Thank you.

Sincerely,

${name}`;
  }

  return '';
};

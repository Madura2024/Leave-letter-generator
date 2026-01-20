import React from 'react';

const InputSection = ({ mode, formData, onChange, setMode }) => {
    const handleChange = (e) => {
        onChange(e.target.name, e.target.value);
    };

    return (
        <div className="input-section">
            <div className="mode-selector">
                <button
                    className={mode === 'college' ? 'active' : ''}
                    onClick={() => setMode('college')}
                >
                    College
                </button>
                <button
                    className={mode === 'office' ? 'active' : ''}
                    onClick={() => setMode('office')}
                >
                    Office
                </button>
                <button
                    className={mode === 'medical' ? 'active' : ''}
                    onClick={() => setMode('medical')}
                >
                    Medical
                </button>
            </div>

            <div className="form-container">
                {/* Common Field */}
                <div className="form-group">
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name || ''}
                        onChange={handleChange}
                    />
                </div>

                {/* College Fields */}
                {mode === 'college' && (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Roll Number</label>
                                <input
                                    type="text"
                                    name="rollNo"
                                    placeholder="e.g. 21CS001"
                                    value={formData.rollNo || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Year</label>
                                <select name="year" value={formData.year || ''} onChange={handleChange}>
                                    <option value="">Select Year</option>
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <input
                                type="text"
                                name="dept"
                                placeholder="e.g. Computer Science"
                                value={formData.dept || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

                {/* Office Fields */}
                {mode === 'office' && (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Employee ID</label>
                                <input
                                    type="text"
                                    name="empId"
                                    placeholder="e.g. EMP1234"
                                    value={formData.empId || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Designation</label>
                                <input
                                    type="text"
                                    name="designation"
                                    placeholder="e.g. Software Engineer"
                                    value={formData.designation || ''}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Manager Name</label>
                            <input
                                type="text"
                                name="managerName"
                                placeholder="Managers Name"
                                value={formData.managerName || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

                {/* Medical Fields */}
                {mode === 'medical' && (
                    <>
                        <div className="form-group">
                            <label>Condition / Illness</label>
                            <input
                                type="text"
                                name="condition"
                                placeholder="e.g. High fever, viral infection"
                                value={formData.condition || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Doctor Name</label>
                                <input
                                    type="text"
                                    name="doctorName"
                                    placeholder="Dr. Name"
                                    value={formData.doctorName || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Hospital Name</label>
                                <input
                                    type="text"
                                    name="hospitalName"
                                    placeholder="Hospital Name"
                                    value={formData.hospitalName || ''}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </>
                )}


                {/* Common Logic for Reasons & Dates */}
                {mode !== 'medical' && (
                    <div className="form-group">
                        <label>Reason</label>
                        <textarea
                            name="reason"
                            placeholder="Reason for your leave..."
                            value={formData.reason || ''}
                            onChange={handleChange}
                            rows="3"
                        />
                    </div>
                )}

                <div className="form-row">
                    <div className="form-group">
                        <label>Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            value={formData.endDate || ''}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputSection;

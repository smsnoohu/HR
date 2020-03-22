import React from 'react';
import Button from '../../main/Shared/FormComponents/Button';
import File from '../../main/Shared/FormComponents/File';

const AttachmentModalContent = () => {
    return(
        <>
            <Button className="secondary btn-sm pull-right mb-10" icon="plus" iconPlace="prefix" value="Add" />
            <table className="data-table">
                <thead>
                    <tr>
                        <th width="5%">#</th>
                        <th width="55%">Document Name</th>
                        <th width="20%">Attach</th>
                        <th width="20%">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-head="#">1</td>
                        <td data-head="Document Name">Hotel Bill</td>
                        <td data-head="Attach">
                            <div className="upload-btn-wrapper">
                                <Button className="secondary btn-sm" icon="file-upload" iconPlace="prefix" value="Browse" />
                                <File id="assignmentAttachment" name="assignmentAttachment" />
                            </div>
                        </td>
                        <td data-head="Delete">
                            <Button className="danger btn-sm" icon="trash-alt" iconPlace="prefix" value="Delete" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="modal-footer text-right">
                <Button className="light" icon="times" iconPlace="prefix" value="Close" />
                <Button className="secondary" icon="check" iconPlace="prefix" value="Attach" />
            </div>
        </>
    );
}

export default AttachmentModalContent;
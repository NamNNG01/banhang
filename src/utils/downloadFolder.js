/**
 * Download a folder as ZIP file
 * @param {string} folderName - Name of the folder to download (e.g., 'BangAI')
 */
export const downloadFolderAsZip = async (folderName = 'BangAI') => {
  try {
    const response = await fetch(`/api/download-folder/${folderName}`);

    if (!response.ok) {
      throw new Error('Failed to download folder');
    }

    // Get the blob
    const blob = await response.blob();

    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `${folderName}.zip`;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading folder:', error);
    alert('Không thể tải folder. Vui lòng thử lại.');
  }
};

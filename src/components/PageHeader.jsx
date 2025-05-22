export default function PageHeader({ title = "Dashboard", breadcrumb, children }) {
  const renderBreadcrumb = () => {
    if (typeof breadcrumb === "string") {
      return <div className="text-gray-500">{breadcrumb}</div>;
    }
    if (Array.isArray(breadcrumb)) {
      return (
        <div className="flex items-center flex-wrap text-gray-500 text-sm">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center">
              {item}
              {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </div>
      );
    }
    return null;
  };
  return (
    <div
      id="pageheader-container"
      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 bg-white rounded-lg shadow"
    >
      <div id="pageheader-left" className="flex flex-col gap-1">
        <span id="page-title" className="text-2xl md:text-3xl font-semibold text-gray-800">
          {title}
        </span>
        <div id="breadcrumb-links" className="font-medium">
          {renderBreadcrumb()}
        </div>
      </div>

      <div id="action-button" className="mt-4 md:mt-0 flex items-center">
        {children}
      </div>
    </div>
  );
}

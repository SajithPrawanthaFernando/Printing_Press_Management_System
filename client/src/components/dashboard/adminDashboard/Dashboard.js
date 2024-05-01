import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import Card from "../../common/Card";
import BarChart from "../../charts/BarChart";
import PieChart from "../../charts/PieChart";

const Dashboard = () => {
  return (
    <>
      <AdminLayout>
        {/* Overview */}
        <div className="bg-white p-3 mt-3 rounded shadow-sm">
          <h3 className="fs-5 fw-bold">Overview</h3>

          <div className="row mt-4">
            <div className="col-lg-3">
              <Card
                title="Total Users"
                number="50"
                icon={<i class="bi bi-people-fill"></i>}
                subtext="Increased by 60%"
              />
            </div>
            <div className="col-lg-3">
              <Card
                title="Total Products"
                number="50"
                icon={<i class="bi bi-people-fill"></i>}
                subtext="Increased by 60%"
              />
            </div>
            <div className="col-lg-3">
              <Card
                title="Total Orders"
                number="50"
                icon={<i class="bi bi-people-fill"></i>}
                subtext="Increased by 60%"
              />
            </div>
            <div className="col-lg-3">
              <Card
                title="Total Employees"
                number="50"
                icon={<i class="bi bi-people-fill"></i>}
                subtext="Increased by 60%"
              />
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Dashboard;

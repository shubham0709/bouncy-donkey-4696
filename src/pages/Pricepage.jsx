import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./pricepage.css";

const Pricepage = () => {
  return (
    <>
      <Navbar />
      <div id="Pickyourplan">
        <div id="Pick">
          <h1>Pick your plan</h1>
          <h2>Track time on projects with your team.</h2>
        </div>
        <div id="Free-Pro">
          <div className="Free-Pro1">
            <h3 id="na">Free</h3>
            <p id="forIndi">
              For individuals or teams just getting started with time tracking.
            </p>
            <div className="price">
              <span>$</span>0
            </div>
            <div className="listul">
              <ul className="list">
                <li>Unlimited team members &amp; projects</li>
                <li>Track time on projects &amp; tasks</li>
                <li>Set billable rates</li>
                <li>Generate detailed reports</li>
              </ul>
            </div>
            <button className="free-Pro-Button">Select</button>
          </div>
          <div className="Free-Pro1">
            <h3 id="na">Pro</h3>
            <p id="freelancers">
              For freelancers and teams actively managing their time.
            </p>
            <div className="price1">
              <div id="dollor">
                <span>$</span>6
              </div>
              <div id="dollor1">
                <p>- per active team member, per month billed annually</p>
                <p>- $7 billed monthly</p>
              </div>
            </div>
            <div className="listul">
              <ul className="list">
                <li>Everything in free PLUS</li>
                <li>Priority support</li>
                <li>Generate client invoices</li>
                <li>Add &amp; edit logs on behalf of your team</li>
                <li>Approval workflow with Audit log</li>
                <li>Extra features…</li>
              </ul>
            </div>
            <button className="free-Pro-Button1">14 days free trial</button>
          </div>
        </div>
      </div>
      <div id="topFreePaid">
        <div id="features">
          <h2>Feature</h2>
        </div>
        <div id="free_paid">
          <div>Free</div>
          <div>Pro</div>
        </div>
      </div>
      <div>
        <table className="compare-plans table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <td className="headings" colSpan={4}>
                Track
              </td>
            </tr>
            <tr>
              <td>
                Timer or add manually
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    Track in real time or add time logs for past acitvity
                  </div>
                </div>
              </td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Timesheet - weekly tracking
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">Track time in a weekly time sheet</div>
                </div>
              </td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Timer - daily tracking
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    Track time with the start and stop button
                  </div>
                </div>
              </td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Timeline view</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Favorites</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Expenses</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Detailed description and attachments</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Daily tracking reminder (mobile app)</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Bulk edit or delete logs</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Track custom fields (numeric)</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="compare-plans table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <td className="headings" colSpan={4}>
                Organize
              </td>
            </tr>
            <tr>
              <td>Unlimited projects, tasks and clients</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task and project templates</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Task and project descriptions</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Group tasks and mark as done</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Budget hours, billable or cost amounts
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    Set budgets for total project hours, billable hours or cost
                    amounts.
                  </div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Budget alerts to email</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Monthly budget</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Task budgets or estimates</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Assign tasks to team members</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="compare-plans table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <td className="headings" colSpan={4}>
                Billing
              </td>
            </tr>
            <tr>
              <td>Billable rate per project</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Billable rate per tasks or team member
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    Set hourly rates for tasks or for team members
                  </div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Labor costs (Team costs)
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    Automatically Calculated the Labour cost
                  </div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Calculate profit &amp; loss</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Auto-round billable time
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">Adjust rounding to specific time</div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Invoicing</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="compare-plans table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <td className="headings" colSpan={4}>
                Report
              </td>
            </tr>
            <tr>
              <td>Dashboard</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customize a detailed report (Activity)</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Download to PDF, export to XLS</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Send reports to Email</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Timesheet report</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Schedule detailed reports to email</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Team pivot report</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Economy report</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Download &amp; customize reports in Excel</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Own logo on PDF reports</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="compare-plans table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <td className="headings" colSpan={4}>
                Team
              </td>
            </tr>
            <tr>
              <td>Unlimited team members</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Role: Administrator
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    The Administator has Access to all data and features in my
                    Hours
                  </div>
                </div>
              </td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Role: Normal member
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    The Normal member can only View and manage own data
                  </div>
                </div>
              </td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Role: Project manager
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    The Project manager can view and manage data from specific
                    Projects
                  </div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Group members into Teams
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    Create Teams by grouping your team mates
                  </div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Hide billing and cost details</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Require project and task input
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    TIme logs need to be assigned to a project and a task
                  </div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Approval workflow</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Add, edit or delete team's logs</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>
                Auto-lock time logs
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">
                    Lock time logs so they can not be edited
                  </div>
                </div>
              </td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Tracking reminders</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Audit log report</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Track team's capacity</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="compare-plans table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <td className="headings" colSpan={4}>
                Integrations &amp; Apps
              </td>
            </tr>
            <tr>
              <td>Import timesheets, projects and clients</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Mobile apps
                <div className="abc">
                  <div className="round">i</div>
                  <div className="acc">Mobile Apps for ISO and Android</div>
                </div>
              </td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>API access</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Zapier integration</td>
              <td>
                <div className="check" />
              </td>
              <td>
                <div className="check" />
              </td>
            </tr>
            <tr>
              <td>Quickbooks native integration</td>
              <td />
              <td>
                <div className="check" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="faqBox">
        <h2>Frequently Asked Questions</h2>
        <div id="accordinboxes">
          <div className="accordion">
            <div className="contentBox">
              <div className="label">
                Will I be charged after the 14 days trail?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  No, you don't have to enter your credit card details to start
                  your Free trial. When you decide to continue using My Hours,
                  enter your payment details and you'll be automatically charged
                  each period (monthly or annually).
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                Can I switch toa Free account after the Pro Trail ends?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  Sure! You'll always have a choice between staying on the Pro
                  version that comes with a subscription or downgrading to a
                  Free account. Just keep in mind that you will lose access to
                  Pro features.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                What if we need more than 14 days to test to Pro edition?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  Just send us an email to support@myhours.com and we'll provide
                  you with an extension.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                What's Included in the Pro Trail?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  Pro Trial comes with every feature that My Hours offers. If
                  you have trouble finding a functionality you need, send us an
                  email.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                What kind of payment do you accept?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  We accept Visa, MasterCard, American Express, Discover, and
                  PayPal. Additional payment options, including wire transfer,
                  are available for larger teams with 10+ members and an annual
                  payment.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                Do you offer discounts?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  We offer discounts to non-profit companies and larger teams.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                What type of support is included?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  All My Hours users receive email support, while Pro customers
                  can also engage via live chat. Our typical response time is
                  less than 24 hours. Teams with 3+ members can sign up for a
                  free training here.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                Can I get a refund?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  We issue a refund when My Hours account with active
                  subscription was not being used for a few months.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="label">
                Can I deactivate inactive team members?
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div className="paragrafs">
                <p>
                  You can archive inactive team members while keeping their data
                  for reporting. We do not charge for archived team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="lightblue">
        <div id="text1">
          “ I have tested similar time tracking apps but they all have limits.
          My Hours is without a doubt the most important tool I use in my
          business. ”
        </div>
        <div id="text2">
          <p>- Kevin from St. Petersburg, FL, USA</p>
          <a href="">Read more reviews &gt;</a>
        </div>
        <div id="memberprice1">
          <div>
            <p className="members">MEMBERS</p>
            <h1 className="memberPrice">
              250<span className="memberPriceSpan">k</span>{" "}
            </h1>
          </div>
          <div>
            <p className="members">MEMBERS</p>
            <h1 className="memberPrice">
              1.6<span className="memberPriceSpan">b</span>{" "}
            </h1>
          </div>
          <div>
            <p className="members">MEMBERS</p>
            <h1 className="memberPrice">
              4.7<span className="memberPriceSpan">/5</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div id="howQuestion">
        <h2 clas="">Have questions? We're here</h2>
        <p>
          It's always nice to have someone to talk to when facing new software.
          Get in touch and we'll try our best to help you out.
        </p>
        <div id="atages">
          <p>
            <a href="" className="linkabc">
              EMAIL &amp; LIVE CHAT{" "}
            </a>
          </p>
          <p>
            <a href="" className="linkabc">
              {" "}
              TRAINING FOR TEAM{" "}
            </a>
          </p>
          <p>
            <a href="" className="linkabc">
              {" "}
              KNOWLWDGE BASE
            </a>
          </p>
        </div>
      </div>
      <Flex justify="space-around" mb="10rem" w="90%" m="auto">
        <Box bg="#F8FAFB" w="58%">
          <Box m="auto" w="60%" bg="#8fafb" mt="1rem">
            <Text mt="30px" color="#375D75" fontSize="40px" fontWeight="bold">
              Waste no more time, jump right in!
            </Text>
          </Box>
          <Button
            w="50%"
            fontSize="20px"
            height="60px"
            bg="#3b8fc2"
            cursor="pointer"
            borderRadius="5px"
            border="none"
            mt="3rem"
          >
            <Link color="white">Get Started - It's Free</Link>
          </Button>
          <Text w="80%" color="#375D75" m="auto" mt="1rem" mb="2rem">
            My Hours is Free to use for teams of any size.
            <a style={{ color: "black", textDecoration: "underline" }} href="">
              Pro paid plan
            </a>{" "}
            comes with additional features like invoicing, admin controls and
            priority support.
          </Text>
        </Box>
        <Box w="38%" bg="#FAF9F7">
          <Text
            w="80%"
            m="auto"
            textAlign="left"
            fontSize="30px"
            mt="30px"
            mb="35px"
          >
            Need more info? Get a product demo.
          </Text>
          <Button border="1px solid black" bg="white" mb="3rem">
            <Link color="black">Talk to our Team</Link>
          </Button>
          <Text>
            Teams of 6+ are welcome to book a personalized demo to see how My
            Hours works in detail.
          </Text>
        </Box>
      </Flex>
      <Box mt="5rem">
        <Footer />
      </Box>
    </>
  );
};

export default Pricepage;

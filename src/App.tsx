import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import awsLogo from './assets/aws.png'
import cloudfrontLogo from './assets/cloudfront.svg'
import lambdaLogo from './assets/lambda.svg'
import cognitoLogo from './assets/cognito.png'
import apiLogo from './assets/apigateway.png'
import pkceImg from './assets/pkce.png'
import reactImg from './assets/react.png'
import react1 from './assets/react1.jpeg'
import react2 from './assets/react2.jpeg'
import react3 from './assets/react3.jpeg'
import cf1 from './assets/cf1.jpeg'
import cf2 from './assets/cf2.jpeg'
import cf3 from './assets/cf3.jpeg'
import realcf1 from './assets/realcf1.jpeg'
import paths from './assets/paths.jpeg'
import lambdainteg from './assets/lambdainteg.jpeg'
import default1 from './assets/default.jpeg'
import lambda_archi from './assets/lambda_archi_final.svg'
import s3 from './assets/s3.svg'
import { useState, useRef } from 'react'
import './App.css'
import archiImg from './assets/archi.png'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const buildRef = useRef<HTMLDivElement>(null)

  const scrollToBuild = () => {
    if (buildRef.current) {
      buildRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>

      {/* First viewport: landing content */}
      <div style={{ }}>
        <div className="landing">
          <h1>👋 Hey!</h1>

          <p className="subtitle">
            While you’re here, take a look at how
            <span className="highlight"> ITPF Compliance Commander </span>
            came to life.
          </p>

          <div className="cards">
            <div
              className="card"
              onClick={() => setShowPopup(true)}
              style={{ cursor: 'pointer' }}
            >
              <h3>The Idea</h3>
              <p className="idea-text">
                At PMI, keeping applications secure and compliant is one of the most critical tasks.
              </p>

              <p className="idea-text">
                Manual assessment of applications consumes up to <strong>64,000 hours</strong> of manpower yearly. Frustrated by this time sink, <br />
                <span className="highlight1">ITPF Compliance Commander was born</span>.
              </p>
            </div>

            {/* Pop-up */}
            {showPopup && (
              <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                <div className="popup" onClick={e => e.stopPropagation()}>
                  <h2>Did you know?</h2>
                  <p>Each application assessment takes up to 320 hours. At P&C function alone, with 200+ applications, this adds up to 48,000-64,000 hours yearly – <em>enough to power many other projects</em>!</p>
                  <p className="idea-text">
                    Huge shoutout to <span className="highlight">Inez, Thom, Vic, and Zack</span> for inspiring this optimization. This product won the 2025 Manila Gen AI Hackathon, selected from over 220 colleagues.<br /> <br /> 
                    It was an honor to bring it to life! <span className="spin-emoji">🌸</span>
                  </p>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
              </div>
            )}

            <div
              className="card"
              onClick={scrollToBuild}
              style={{ cursor: 'pointer' }}
            >
              <h3>The Build</h3>
              <p>
                React, AWS, automation, and a lot of “wait… why is this failing?”
              </p>
              <div className="card-logos">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                  <img src={awsLogo} className="logo aws" alt="AWS logo" />
                </a>
              </div>
            </div>

            <div className="card">
              <h3>The Mission</h3>
              <p>Make tedious assessments simple, fast, and time-saving.</p>
            </div>
          </div>

          <p className="footer">
            Scroll around. Click things. This is the story behind the tool. <br /><br /><br /><br />
          </p>

          <p
            className="dedication"
            style={{ marginBottom: '2rem' }}
          >
            This project would not exist without <span className="highlight">Jen Macrohon</span>, whose guidance, support, and wisdom made everything possible.
          </p>
        </div>
      </div>

      {/* Second viewport: Build Details */}
      <div
        ref={buildRef}
        style={{
          padding: '2rem 1rem',
        }}
      >
        <h2>The Build Details</h2>
        <p>Time to dive into the nitty-gritty… and yes, it’s as fun as it sounds! </p>

        <img
          src={archiImg}
          alt="Architecture diagram"
          style={{ width: '100%', maxWidth: '1200px', marginTop: '1rem' }}
        />

        <div className="archi-overview">
        <h3>Overview</h3>
        <p>
          User tries to access the React website, this is being blocked by Cognito authentication. 
          Once authenticated, the user is allowed in and the website loads normally. 
          When the user uploads files, the app securely sends them to the backend using the user’s login credentials. 
          Behind the scenes, AWS services process the files step by step, run the required checks, store the results, 
          and send the outcome back to the website so the user can view and download the results. <br /> <br />
        </p>
        </div>

        <div className="archi-overview">
          <h3>What happens in practice</h3>
          <details className="stack-item">
            <summary className="stack-summary">
              <img src={cognitoLogo} alt="Cognito" className="stack-logo" />
              <span>Amazon Cognito</span>
            </summary>
            <p>
              Amazon Cognito supports Proof Key for Code Exchange (PKCE) authentication in authorization code grants. PKCE is an extension to the OAuth 2.0 authorization code grant for public clients. 
              PKCE guards against the redemption of intercepted authorization codes. Take a look at the code flow with PKCE: <br /> <br /> 

              <img
              src={pkceImg}
              alt="PKCE flow"
              className="stack-detail-img-main"
              />

            <div className="stack-detail-text">
            <p><br /> The diagram illustrates the following:</p>
              <ol>
                <li>The application creates a code verifier and code challenge. These are unique values sent to Amazon Cognito for future reference.</li>
                <li>The application calls the /oauth2/authorization endpoint of Amazon Cognito, which redirects the user to the configured IdP login.</li>
                <li>The IdP checks for an existing session. If none exists, the user is prompted to authenticate with username and password. The IdP responds with a SAML token to Cognito.</li>
                <li>After Cognito returns success with a code token, the web server calls /oauth2/token to exchange it for an access token.</li>
                <li>The access token is used for every subsequent call to other applications.</li>
                <li>Other applications validate the access token with Amazon Cognito.</li>
              </ol>
            </div>

            <div className="stack-detail-text">
                <p><strong><br />Cognito Set-up</strong></p>
                <ol>
                  <li>
                    <strong>Create a User Pool</strong>
                    <ul className="sub-list">
                      <li>Go to AWS Cognito console.</li>
                      <li>Create a new User Pool with a unique name.
                        <img
                        src={cf1}
                        alt="User Pool"
                        className="stack-detail-img"
                        />
                      </li>
                        
                      <li>Configure sign-in options (email, username, or both). For this part, I used both.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Configure App Client</strong>
                    <ul className="sub-list">
                      <li>Create an App Client inside the User Pool.
                        <img
                        src={cf2}
                        alt="App Client"
                        className="stack-detail-img"
                        />
                      </li>
                      <li>Make sure to enable Authorization code grant.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Integrate with CloudFront</strong>
                    <ul className="sub-list">
                      <li>Ensure CloudFront serves the React app over HTTPS. Go to Cloudfront dropdown to learn more. </li>
                      <li>Set the Cognito redirect URIs to the CloudFront URL. My current set-up looks like this:
                        <img
                        src={cf3}
                        alt="Perms"
                        className="stack-detail-img"
                        />
                      </li>
                      <li>Now users authenticate via Cognito before accessing the SPA.</li>
                    </ul>
                  </li>
                </ol>
              </div>

            </p>
          </details>

          <details className="stack-item">
            <summary className="stack-summary">
              <img src={reactImg} alt="React" className="stack-logo" />
              <span>React</span>
            </summary>
            <p>
             React serves as the frontend framework for the application. 
             Components are organized hierarchically, with state managed via hooks and context. <br /> <br />

             This part was the easiest to do since React was deployed as a SPA. 
             A single-page application (SPA) is a website or web application that dynamically updates the contents of a displayed webpage by using JavaScript APIs (now fully typed with TypeScript). 
             This approach enhances the user experience and performance of a website because it updates only new data instead of reloading the entire webpage from the server. <br /> <br />

              <div className="stack-detail-text">
                <p><strong>React Set-up in AWS S3</strong></p>
                  <ol>
                    <li>
                      <strong>Build the React app</strong> <br />
                      <div className="indent">
                        <pre className="code-block"><code>npm run build</code></pre>
                      </div>
                      Run the script above in terminal. This generates a <code>build/</code> folder with static assets.
                    </li>

                    <br/>

                     <li>
                      <strong>Create an S3 bucket</strong>
                      <ul className="sub-list">
                        <li>Go to AWS S3 console.</li>
                        <li>Create a bucket (unique name).
                          <img
                            src={react1}
                            alt="React S3 Bucket"
                            className="stack-detail-img"
                          />
                        </li>
                        <li>Enable Static website hosting in bucket properties.
                          <img
                            src={react2}
                            alt="React S3 Bucket"
                            className="stack-detail-img"
                          />
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>Upload build files</strong>
                      <ul className="sub-list">
                        <li>Upload all contents of the <code>build/</code> folder to the bucket. It should look something like this:
                          <img
                            src={react3}
                            alt="React S3 Bucket"
                            className="stack-detail-img"
                          />
                         Note that while the bucket hosts the website successfully at this step via the bucket website endpoint, it is not secure. To serve content over HTTPS, we configure CloudFront with Origin Access Control.
                        </li>
                      </ul>
                    </li>
                  </ol>
              </div>
            </p>
          </details>

          <details className="stack-item">
            <summary className="stack-summary">
              <img src={cloudfrontLogo} alt="Cloudfront" className="stack-logo" />
              <span>Amazon CloudFront</span>
            </summary>
            <p>
              This step is imperative as AWS Cognito only accepts HTTPS connections. 
              In the previous dropdown, S3 hosted the static React website over HTTP. 
              To ensure secure access, we use CloudFront to redirect HTTP to HTTPS, enabling Cognito integration for authentication. <br /> <br />

              <div className="stack-detail-text">
              <ol>
                <li>
                  <strong>Create a CloudFront Distribution</strong>
                  <ul className="sub-list">
                    <li>Go to the AWS CloudFront console and click “Create Distribution”.</li>
                    <li>Set the S3 bucket as the origin (e.g., <code>itpf-commander-ui.s3.amazonaws.com</code>).
                      <img
                        src={realcf1}
                        alt="CF"
                        className="stack-detail-img"
                      />
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Configure Default Cache Behavior</strong>
                  <ul className="sub-list">
                    <li>Viewer Protocol Policy: “Redirect HTTP to HTTPS”.</li>
                    <li>Allowed HTTP Methods: GET, HEAD (for static content).</li>
                    <li>Cache Policy: Standard or optimized for static content.</li>
                  </ul>
                </li>

                <li>
                  <strong>Attach SSL Certificate (HTTPS)</strong>
                  <ul className="sub-list">
                    <li>If using a custom domain, attach an ACM certificate for HTTPS.</li>
                    <li>If using the default CloudFront domain, HTTPS is enabled automatically. 
                      For ITPF Compliance Commander, we are using the default Cloudfront domain so no extra step is needed here.</li>
                  </ul>
                </li>

                <li>
                  <strong>Integrate with Cognito</strong>
                  <ul className="sub-list">
                    <li>Set the Cognito App Client redirect URIs to point to the CloudFront distribution (see #3 of Amazon Cognito Set-up).</li>
                    <li>Users now authenticate via Cognito before accessing the SPA securely over HTTPS.</li>
                  </ul>
                </li>
              </ol>
            </div>
            </p>
          </details>

          <details className="stack-item">
            <summary className="stack-summary">
              <img src={apiLogo} alt="API Gateway" className="stack-logo" />
              <span>Amazon API Gateway</span>
            </summary>
            <p>
              API Gateway provides a secure, scalable endpoint for our backend Lambda functions. 
              This allows the React frontend to communicate with AWS services via HTTPS, with Cognito handling authentication. <br /> <br />

              <div className="stack-detail-text">
                  <ol>
                    <li>
                      <strong>Create a REST API or HTTP API</strong>
                      <ul className="sub-list">
                        <li>Go to the AWS API Gateway console and click “Create API”.</li>
                        <li>Choose REST API (or you can choose HTTP API also, but for this app, we used REST API).</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Configure Resources & Methods</strong>
                      <ul className="sub-list">
                        <li>Add resources (paths) like <code>/download</code> or <code>/presign-url</code>. <br/>
                          <img
                            src={paths}
                            alt="Gateway"
                            className="stack-detail-img"
                          />
                          <code>/presign-url</code> is used to securely fetch or upload files to S3, while <code>/download</code> serves annotated files showing compliance results.  <br/>
                          Ignore the <code>/callback</code> as it wasn't really used for this project, it was just for testing purposes.</li> 
                        <li>For each resource, define HTTP methods (GET, POST, etc.).</li>
                        <li>Attach the methods to Lambda functions. Lambda controls all logic, data access, and responses for the API Gateway endpoint it's attached to.
                          <img
                            src={lambdainteg}
                            alt="Gateway Lambda"
                            className="stack-detail-img"
                          />
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>Deploy the API</strong>
                      <ul className="sub-list">
                        <li>Create a new Stage (e.g., <code>default</code>).</li>
                        <li>Deploy the API to that stage.
                          <img
                            src={default1}
                            alt="Gateway Stage"
                            className="stack-detail-img"
                          />
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>Enable HTTPS & Security</strong>
                      <ul className="sub-list">
                        <li>Enable throttling, CORS, and request validation as needed.</li>
                      </ul>
                    </li>
                  </ol>
            </div>
            </p>
          </details>

          <details className="stack-item">
            <summary className="stack-summary">
              <img src={lambdaLogo} alt="Lambda" className="stack-logo" />
              <span>Amazon Lambda</span>
            </summary>
            <p>
              Lambda functions handle all backend logic for our app. 
              API Gateway triggers them via HTTPS, while Cognito ensures only authenticated users can invoke them. <br/>
              This stack was by far the most time-consuming to build. <br /> <br />

              <img
                src={lambda_archi}
                alt="Lambda Architecture"
                className="stack-detail-img-main"
              />

              <div className="stack-detail-text">
                <ol>

                  <li>
                    <strong>presign-url</strong>
                    <p>
                      Generates temporary pre-signed S3 URLs for secure file uploads and downloads.
                      Invoked by the React frontend everytime the user uploads a PDF or requests results.
                      Note that this lambda function is not in the stack as the execution of this is implicit (behind-the-scenes).
                    </p>
                  </li>

                  <li>
                    <strong>display-conditions</strong>
                    <p>
                      Triggered by API Gateway when a user submits a LeanIX ID. 
                      It matches the ID against an Excel source, extracts application conditions 
                      (Criticality, ConfidentialityManual, InternetFacing, HostedGroup, applicationName), 
                      and stores the result in S3 as <code>display_results.json</code>.
                    </p>
                  </li>

                  <li>
                    <strong>filter-template</strong>
                    <p>
                      Filters the base ITPF compliance template using conditions produced by 
                       <code>display-conditions</code>, returning only relevant controls.
                    </p>
                  </li>

                  <li>
                    <strong>extract-text</strong>
                    <p>
                      Extracts raw text from the uploaded vendor document and saves it as a <code>.txt</code> file in S3 
                      for downstream analysis.
                    </p>
                  </li>

                  <li>
                    <strong>extract-data</strong>
                    <p>
                      It prepares the needed documents (refer to diagram with pull arrows) for Bedrock analysis.
                    </p>
                  </li>

                  <li>
                    <strong>parallel-AnalyzeRow</strong>
                    <p>
                      Invokes another lambda (analyzeRow) under the hood for each vendor document uploaded by the user.
                    </p>
                  </li>

                  <li>
                    <strong>analyzeRow</strong>
                    <p>
                      Uses the extracted text and filtered template to perform compliance analysis via Bedrock, producing compliant / non-compliant results with supporting evidence.
                    </p>
                  </li>

                  <li>
                    <strong>consolidate</strong>
                    <p>
                      Consolidates Bedrock responses into a single final result for similar rows analyzed across different vendor documents.
                    </p>
                  </li>

                  <li>
                    <strong>combineResults</strong>
                    <p>
                      Loads and creates the Excel file in S3, merges InfoSec results from the current batch into the correct rows, saves the updated file, and if this is the final batch, generates a presigned download URL and writes a done.json marker before returning the S3 key and URL.
                    </p>
                  </li>
                </ol>
              </div>
            </p>
          </details>

          <details className="stack-item">
            <summary className="stack-summary">
              <img src={s3} alt="Amazon S3" className="stack-logo" />
              <span>Amazon S3</span>
            </summary>
            <p>
              Amazon S3 is used as the primary storage layer for the application.
              It stores all uploaded documents, intermediate artifacts, and final analysis outputs generated by Lambda and Step Functions.
              Access is tightly controlled using IAM and presigned URLs, with CloudFront and API Gateway used only where secure access is required.
              <br /><br />

              <div className="stack-detail-text">
                <table className="stack-table">
                  <thead>
                    <tr>
                      <th>Folder</th>
                      <th>Path</th>
                      <th>Access rights</th>
                      <th>Shared?</th>
                      <th>Access to shared</th>
                      <th>Used for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>uploads/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/uploads/</code></td>
                      <td>Presigned URL</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores vendor PDF files uploaded by users for analysis.</td>
                    </tr>
                    <tr>
                      <td><code>get_conditions/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/get_conditions/</code></td>
                      <td>IAM: Service Manager, Support Team</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores the LeanIX application ID submitted by the user to extract matching application conditions.</td>
                    </tr>
                    <tr>
                      <td><code>display_conditions/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/display_conditions/</code></td>
                      <td>IAM: Server Admin</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores extracted application conditions used for downstream template filtering.</td>
                    </tr>
                    <tr>
                      <td><code>extracted/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/extracted/</code></td>
                      <td>IAM: Lambda, Step Functions</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores raw text extracted from uploaded vendor documents for AI analysis.</td>
                    </tr>
                    <tr>
                      <td><code>filtered/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/filtered/</code></td>
                      <td>IAM: Lambda, Step Functions</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores templates filtered based on extracted application conditions.</td>
                    </tr>
                    <tr>
                      <td><code>annotated/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/annotated/</code></td>
                      <td>IAM: Lambda</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores AI-annotated templates, compliance results, and generated summary reports.</td>
                    </tr>
                    <tr>
                      <td><code>reference/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/reference/</code></td>
                      <td>Read-only (IAM)</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores static reference files such as master ITPF templates and LeanIX application data.</td>
                    </tr>
                    <tr>
                      <td><code>status/</code></td>
                      <td><code>s3://itpf-react-upload-bucket/status/</code></td>
                      <td>IAM: Step Functions, Lambda</td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>Stores processing metadata and status markers for tracking analysis progress.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </p>
          </details>
          <br /> <br /> <br /> <br />
        </div>
      </div>
    </div>
  )
}

export default App

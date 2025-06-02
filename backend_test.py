
import requests
import sys
from datetime import datetime

class AdvisorXTester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status=200, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        default_headers = {'Content-Type': 'application/json'}
        if headers:
            default_headers.update(headers)
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=default_headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=default_headers)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=default_headers)
            elif method == 'DELETE':
                response = requests.delete(url, headers=default_headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"Response: {response.text}")
                    return False, response.json()
                except:
                    return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_landing_page(self):
        """Test if the landing page loads"""
        success, _ = self.run_test(
            "Landing Page",
            "GET",
            "",
            200
        )
        return success

    def print_summary(self):
        """Print test results summary"""
        print(f"\n📊 Tests Summary:")
        print(f"Tests passed: {self.tests_passed}/{self.tests_run}")
        print(f"Success rate: {(self.tests_passed/self.tests_run)*100 if self.tests_run > 0 else 0:.2f}%")
        return self.tests_passed == self.tests_run

def main():
    # Setup
    tester = AdvisorXTester("http://localhost:3000")
    
    # Run tests
    tester.test_landing_page()
    
    # Print results
    success = tester.print_summary()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())

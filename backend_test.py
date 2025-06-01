
import requests
import sys
import json
import time

class AdvisorXAPITester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

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
                except:
                    pass
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_logos_api(self):
        """Test the logos API endpoint"""
        success, response = self.run_test(
            "Get Company Logos",
            "GET",
            "api/logos",
            200
        )
        
        if success:
            if 'logos' in response:
                print(f"Found {len(response['logos'])} logos")
                return True
            else:
                print("❌ No logos found in response")
                return False
        return False

def main():
    # Setup
    tester = AdvisorXAPITester()
    
    # Run tests
    logos_test = tester.test_logos_api()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if not logos_test:
        print("❌ Logos API test failed - This is critical for the company logos marquee")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())

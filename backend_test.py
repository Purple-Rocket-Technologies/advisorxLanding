
import requests
import time
import sys
from datetime import datetime

class AdvisorXTester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status=200, expected_content_type=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url)
            else:
                raise ValueError(f"Unsupported method: {method}")

            success = response.status_code == expected_status
            
            # Check content type if specified
            content_type_success = True
            if expected_content_type and 'Content-Type' in response.headers:
                content_type_success = expected_content_type in response.headers['Content-Type']
                if not content_type_success:
                    print(f"❌ Content-Type mismatch - Expected: {expected_content_type}, got: {response.headers['Content-Type']}")
            
            success = success and content_type_success
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if expected_content_type:
                    print(f"✅ Content-Type: {response.headers.get('Content-Type', 'Not provided')}")
            else:
                print(f"❌ Failed - Expected status {expected_status}, got {response.status_code}")

            return success, response
        
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_logo_implementation(self):
        """Test the logo implementation in the NavBar component"""
        # Test main page to verify logo implementation
        success, response = self.run_test(
            "Main Page Load",
            "GET",
            "",
            200,
            "text/html"
        )
        
        if success:
            # Verify it contains the inline SVG logo implementation
            if 'svg width="40" height="40" viewBox="0 0 40 40"' in response.text:
                print("✅ Page contains inline SVG logo as expected")
            else:
                print("❌ Page does not contain inline SVG logo")
                success = False
            
            # Verify white logo (non-scrolled state)
            if 'fill="#ffffff"' in response.text and 'stroke="#ffffff"' in response.text:
                print("✅ Page contains white logo fill for non-scrolled state")
            else:
                print("❌ Page does not contain white logo fill for non-scrolled state")
                success = False
            
            # Verify dark logo (scrolled state)
            if 'fill="#1f2937"' in response.text and 'stroke="#1f2937"' in response.text:
                print("✅ Page contains dark logo fill for scrolled state")
            else:
                print("❌ Page does not contain dark logo fill for scrolled state")
                success = False
            
            # Verify logo size
            if 'width="40" height="40"' in response.text:
                print("✅ Logo has correct dimensions (40x40 pixels)")
            else:
                print("❌ Logo does not have correct dimensions")
                success = False
            
            # Verify stroke width
            if 'strokeWidth="1"' in response.text:
                print("✅ Logo has correct stroke width (1)")
            else:
                print("❌ Logo does not have correct stroke width")
                success = False
        
        return success

    def test_typewriter_animation(self):
        """Test the typewriter animation implementation"""
        # Test main page to verify typewriter animation implementation
        success, response = self.run_test(
            "Typewriter Animation",
            "GET",
            "",
            200,
            "text/html"
        )
        
        if success:
            # Verify typing speed (50ms)
            if '50)' in response.text and 'typing phase' in response.text.lower():
                print("✅ Typing speed is set to 50ms as expected")
            else:
                print("❌ Typing speed is not set to 50ms")
                success = False
            
            # Verify erasing speed (30ms)
            if '30)' in response.text and 'erasing phase' in response.text.lower():
                print("✅ Erasing speed is set to 30ms as expected (was 25ms)")
            else:
                print("❌ Erasing speed is not set to 30ms")
                success = False
        
        return success

def main():
    # Get the backend URL from environment or use default
    tester = AdvisorXTester("http://localhost:3000")
    
    # Run logo implementation tests
    logo_success = tester.test_logo_implementation()
    
    # Run typewriter animation tests
    typewriter_success = tester.test_typewriter_animation()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if logo_success:
        print("✅ Logo implementation tests passed successfully")
    else:
        print("❌ Some logo implementation tests failed")
    
    if typewriter_success:
        print("✅ Typewriter animation tests passed successfully")
    else:
        print("❌ Some typewriter animation tests failed")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())


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
            # Verify typing speed (53ms)
            if '53)' in response.text and 'typing phase' in response.text.lower():
                print("✅ Typing speed is set to 53ms as expected (was 50ms)")
            else:
                print("❌ Typing speed is not set to 53ms")
                success = False
            
            # Verify erasing speed (33ms)
            if '33)' in response.text and 'erasing phase' in response.text.lower():
                print("✅ Erasing speed is set to 33ms as expected (was 30ms)")
            else:
                print("❌ Erasing speed is not set to 33ms")
                success = False
        
        return success
    
    def test_hyperlinks_open_in_new_tab(self):
        """Test that all hyperlinks open in new tabs"""
        success, response = self.run_test(
            "Hyperlinks Open in New Tab",
            "GET",
            "",
            200,
            "text/html"
        )
        
        if success:
            # Check Blog link in navigation
            if 'href="https://substack.com/@jonathanmichaeljm" target="_blank" rel="noopener noreferrer"' in response.text:
                print("✅ Blog link opens in new tab")
            else:
                print("❌ Blog link does not open in new tab")
                success = False
            
            # Check Login button
            if 'window.open("https://agent.advisorx.ai", "_blank", "noopener,noreferrer")' in response.text:
                print("✅ Login button opens in new tab")
            else:
                print("❌ Login button does not open in new tab")
                success = False
            
            # Check Schedule Demo buttons
            if 'window.open("https://calendly.com/advisorxai/30min", "_blank", "noopener,noreferrer")' in response.text:
                print("✅ Schedule Demo buttons open in new tab")
            else:
                print("❌ Schedule Demo buttons do not open in new tab")
                success = False
            
            # Check Contact Sales buttons
            if 'window.open("https://calendly.com/advisorxai/30min", "_blank", "noopener,noreferrer")' in response.text:
                print("✅ Contact Sales buttons open in new tab")
            else:
                print("❌ Contact Sales buttons do not open in new tab")
                success = False
        
        return success
    
    def test_footer_sections(self):
        """Test that the footer sections have been properly modified"""
        success, response = self.run_test(
            "Footer Sections",
            "GET",
            "",
            200,
            "text/html"
        )
        
        if success:
            # Check Quick Links section only contains Features and Pricing
            footer_content = response.text
            
            # Check Features link exists
            if '<a href="#features" class="text-white hover:text-secondary transition-colors">Features</a>' in footer_content:
                print("✅ Features link exists in Quick Links section")
            else:
                print("❌ Features link does not exist in Quick Links section")
                success = False
            
            # Check Pricing link exists
            if '<a href="#pricing" class="text-white hover:text-secondary transition-colors">Pricing</a>' in footer_content:
                print("✅ Pricing link exists in Quick Links section")
            else:
                print("❌ Pricing link does not exist in Quick Links section")
                success = False
            
            # Check About link does NOT exist
            if '<a href="#about" class="text-white hover:text-secondary transition-colors">About</a>' in footer_content:
                print("❌ About link still exists in Quick Links section")
                success = False
            else:
                print("✅ About link has been removed from Quick Links section")
            
            # Check Security link does NOT exist
            if '<a href="#security" class="text-white hover:text-secondary transition-colors">Security</a>' in footer_content:
                print("❌ Security link still exists in Quick Links section")
                success = False
            else:
                print("✅ Security link has been removed from Quick Links section")
            
            # Check Legal section still exists
            if '<h3 class="font-semibold mb-4 text-white">Legal</h3>' in footer_content:
                print("✅ Legal section still exists in footer")
            else:
                print("❌ Legal section is missing from footer")
                success = False
            
            # Check Privacy Policy link exists
            if '<a href="/privacy-policy" class="text-white hover:text-secondary transition-colors">Privacy Policy</a>' in footer_content:
                print("✅ Privacy Policy link exists in Legal section")
            else:
                print("❌ Privacy Policy link does not exist in Legal section")
                success = False
            
            # Check Terms and Conditions link exists
            if '<a href="/terms" class="text-white hover:text-secondary transition-colors">Terms and Conditions</a>' in footer_content:
                print("✅ Terms and Conditions link exists in Legal section")
            else:
                print("❌ Terms and Conditions link does not exist in Legal section")
                success = False
        
        return success

def main():
    # Get the backend URL from environment or use default
    tester = AdvisorXTester("http://localhost:3000")
    
    # Run typewriter animation tests
    typewriter_success = tester.test_typewriter_animation()
    
    # Run hyperlinks tests
    hyperlinks_success = tester.test_hyperlinks_open_in_new_tab()
    
    # Run footer sections tests
    footer_success = tester.test_footer_sections()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if typewriter_success:
        print("✅ Typewriter animation tests passed successfully")
    else:
        print("❌ Some typewriter animation tests failed")
    
    if hyperlinks_success:
        print("✅ Hyperlinks open in new tab tests passed successfully")
    else:
        print("❌ Some hyperlinks open in new tab tests failed")
    
    if footer_success:
        print("✅ Footer sections tests passed successfully")
    else:
        print("❌ Some footer sections tests failed")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())

package com.client;

import com.facebook.react.ReactActivity;
import com.burnweb.rnpermissions.RNPermissionsPackage;
import android.content.Intent;

public class MainActivity extends ReactActivity {
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
      super.onActivityResult(requestCode, resultCode, data);
      MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
     @Override
      public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
          RNPermissionsPackage.onRequestPermissionsResult(requestCode, permissions, grantResults); // very important event callback
          super.onRequestPermissionsResult(requestCode, permissions, grantResults);
      }


    @Override
    protected String getMainComponentName() {
        return "client";
    }
}

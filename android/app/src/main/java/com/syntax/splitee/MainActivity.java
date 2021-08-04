package com.syntax.splitee;
import android.os.Bundle;

import ch.byrds.capacitor.contacts.Contacts;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
          add(Contacts.class);
        }});
    }
}
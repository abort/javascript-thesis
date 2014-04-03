package jsimpl;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.eclipse.imp.pdb.facts.IString;
import org.eclipse.imp.pdb.facts.IValueFactory;

public class Encoder {
	private IValueFactory valueFactory;
	
	public Encoder(IValueFactory factory) {
		this.valueFactory = factory;
	}


	public IString javascriptEscape(IString input) {
		try {
			if (input.getType().isString())
				return valueFactory.string(URLEncoder.encode(input.getValue(), "UTF8"));			
		}
		catch (UnsupportedEncodingException e) {
			System.err.println("Exception: " + e);
		}
		return valueFactory.string("");
	}
}
